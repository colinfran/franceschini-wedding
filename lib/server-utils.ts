import { DataResponse, Guest, GuestList, RegistryItem } from "@/types"

const registry_key = process.env.REGISTRY_LIST_KEY!

export const getRegistryData = async (): Promise<RegistryItem[]> => {
  const response = await fetch(
    "https://www.zola.com/web-registry-api/v1/registryCollection/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        registry_key,
        flattened_view: "true",
      }),
    },
  )
  const data: DataResponse = await response.json()
  return data.default_collection
}

export const findAssociatedAttendees = (guestList: GuestList, firstNameInitial: string, lastName: string): Guest[] | null => {
  const matchedGuests: Guest[] = [];
  
  // Split the provided lastName into its parts
  const lastNameParts = lastName.split(" ");

  for (const guest of guestList.guests) {
    for (const fullName of guest.attendees) {
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0];
      const restOfName = nameParts.slice(1); // Everything after the first name
      
      // Check if first name's initial matches
      if (firstName.charAt(0) === firstNameInitial) {
        // Check if any part of the restOfName contains the lastName sequence
        const isLastNameMatch = lastNameParts.every(part => 
          restOfName.some(namePart => namePart.startsWith(part))
        );

        if (isLastNameMatch) {
          matchedGuests.push({
            _id: guest._id,
            attendees: guest.attendees,
            willAttend: guest.willAttend,
            date: guest.date || "",
          });
        }
      }
    }
  }

  // Return matched guests or null if no matches
  return matchedGuests.length > 0 ? matchedGuests : null;
};

