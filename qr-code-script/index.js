const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Function to generate a QR code for each ID and create a folder per ID
const generateQRCodes = async (guests) => {
  // Make sure the 'qr-codes' directory exists
  const qrCodesDir = path.join(process.cwd(), 'qr-codes');
  if (!fs.existsSync(qrCodesDir)) {
    fs.mkdirSync(qrCodesDir);
  }

  for (const guest of guests) {
    try {
      const { _id, attendees } = guest;
      const guestId = String(_id);
      const guestFolderPath = path.join(qrCodesDir, guestId);

      // Create a folder for each guest based on their ID
      if (!fs.existsSync(guestFolderPath)) {
        fs.mkdirSync(guestFolderPath);
      }

      // Generate QR code for each ID and save inside the corresponding folder
      const qrCodePath = path.join(guestFolderPath, `${guestId}.png`);
      await QRCode.toFile(qrCodePath, `https://franceschini.wedding/rsvp/${guestId}`);
      // Create and write the attendee's name to attendees.txt file inside their folder
      const attendeesFilePath = path.join(guestFolderPath, 'attendees.txt');
      const attendeesData = attendees.join('\n');
      fs.writeFileSync(attendeesFilePath, attendeesData, 'utf-8');
      console.log(`QR code and attendees txt file for ${guestId} saved to ${qrCodePath}`);


    } catch (err) {
      console.error(`Failed to generate QR code for guest ${guestId}:`, err);
    }
  }
};

// Run the function
const run = async () => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("wedding-rsvp");
    const rsvpCollection = db.collection("rsvp");
    const guests = await rsvpCollection.find().toArray();
    generateQRCodes(guests);
  } finally {
    await client.close();
  }
}

run();
