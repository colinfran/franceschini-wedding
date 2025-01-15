const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();


// Function to generate a QR code for each ID
const generateQRCodes = async (ids) => {
  // Make sure the 'qr-codes' directory exists
  const qrCodesDir = path.join(process.cwd(), 'qr-codes');
  if (!fs.existsSync(qrCodesDir)) {
    fs.mkdirSync(qrCodesDir);
  }

  for (const id of ids) {
    try {
      // Generate QR code for each ID
      const qrCodePath = path.join(qrCodesDir, `${id}.png`);
      await QRCode.toFile(qrCodePath, `https://colinfran.com/rsvp/${id}`);
      console.log(`QR code for ${id} saved to ${qrCodePath}`);
    } catch (err) {
      console.error(`Failed to generate QR code for ${id}:`, err);
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
    const ids = guests.map((attendee) => String(attendee._id));
    generateQRCodes(ids);
  } finally {
    await client.close();
  }
}

run();
