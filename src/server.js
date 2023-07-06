// import { createServer, Model } from "miragejs"

// createServer({
//     models: {
//       service: Model,
//     },
  
//     routes() {
//       this.namespace = "api/"
  
//       this.get("services/", (schema, request) => {
//         return schema.services.all()
//       })

//       this.get("services/:id", (schema, request)=>{
//         const id = request.params.id;
//         return (schema.services.find(id))
//      })
//     },
  
//     seeds(server) {
//       server.create("service", { id: "1",
//          name: "Home verification",
//       imgUrl:"images/verify-pic.webp",
//       brief_desc: `Home Verification is an online platform designed to provide accurate information
//       about the ownership of residential properties. It aims to reduce theft and fraud by enabling individuals
//        to verify the rightful owner of a house before engaging in any transactions.......`, 

//       full_description:`Home Verification is an online platform designed to provide accurate information
//        about the ownership of residential properties. It aims to reduce theft and fraud by enabling individuals
//         to verify the rightful owner of a house before engaging in any transactions. The platform leverages a 
//         comprehensive database of property records, including title deeds, land registry information, and legal 
//         documentation, to ensure the authenticity and accuracy of the ownership details.
//       Users can access the Home Verification platform through a user-friendly website or 
//       mobile application. They can input the address or other identifying information of a 
//        property they are interested in and request verification. The platform 
//        then performs a thorough search within its database to validate the ownership 
//        information and provides users with a verified report.
      
//       The verified report may include the owner's name, contact details, property history, 
//       and any relevant legal or financial encumbrances associated with the property. This
//        service helps individuals, potential buyers, real estate agents, and law enforcement 
//        agencies make informed decisions and mitigate the risk of fraudulent activities related to
//         property transactions.` })

//       server.create("service", { id: "2",
//         name: "Home registration",
//       imgUrl: "images/register-pic.webp",

//       brief_desc:`Home Registration is an online platform that enables property owners to register their houses
//       quickly and conveniently......`,

//       full_description: `Home Registration is an online platform that enables property owners to register their houses
//        quickly and conveniently. It streamlines the property registration process, making it easier for individuals 
//        to establish legal ownership, access marketing opportunities, and ensure the proper documentation of their properties.
//       To use the Home Registration platform, property owners can create an account and provide 
//       the necessary information about their house, including its location, size, amenities, and ownership details.
//        They can also upload relevant documents such as title deeds, floor plans, and photographs to enhance the visibility and marketability of their properties.
      
//       Registered properties are then listed on the platform's database, making them accessible to potential buyers,
//        real estate agents, and other interested parties. The platform may offer additional features, 
//        such as personalized property profiles, virtual tours, 
//        and communication tools to facilitate interactions between sellers and buyers.
      
//       By offering a centralized and efficient registration process, Home Registration simplifies property marketing,
//        enhances visibility, and ensures the authenticity of property listings. 
//        It serves as a reliable resource for individuals looking to buy or rent homes and 
//        provides property owners with a convenient platform to showcase their properties.`})

//       server.create("service", {id: "3",
//         name: "Home sales", 
//       imgUrl: "images/bookings-pic.webp",

//       brief_desc:`Home Sales is an online service that 
//       connects property sellers with potential buyers,facilitating the smooth and efficient process 
//       of selling residential properties........`,

//       full_description:`Home Sales is an online service that 
//       connects property sellers with potential buyers,facilitating the smooth and efficient process 
//       of selling residential properties. 
//       The platform aims to create a secure and transparent environment for property
//        transactions, offering a range of tools and features to assist both sellers and buyers.
//       Property sellers can create listings on the Home Sales platform by providing comprehensive information about 
//       their properties, including location, size, features, and pricing. 
//       They can also upload high-quality images,videos, and virtual tours to showcase their homes effectively. 
//        The platform may offer guidance on setting competitive prices based on market trends and provide access to professional real estate services if needed.
      
//       Potential buyers can search for properties based on their preferences, using filters such as location, 
//       price range, and specific amenities.They can view detailed property information, 
//       compare listings, and contact sellers directly through the platform. 
//       Home Sales may also offer tools for scheduling property viewings, 
//       conducting virtual tours, and engaging in negotiations securely.Throughout the selling process, 
//       Home Sales provides a secure payment gateway to facilitate financial transactions between buyers and sellers. 
//       It may also offer additional services such as legal assistance, property inspection, 
//       and escrow services to ensure a smooth and reliable transaction.
      
//       Overall, Home Sales simplifies the home selling process, maximizes exposure to potential buyers, 
//       and fosters trust and transparency in property transactions.` })
//     },
//   })