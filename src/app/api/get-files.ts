// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// const pinataJWT = process.env.NEXT_PUBLIC_PINATA_JWT;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const response = await axios.get('https://api.pinata.cloud/data/pinList', {
//       headers: {
//         Authorization: `Bearer ${pinataJWT}`,
//       },
//       params: {
//         // Filter files based on user-specific metadata if available
//         // metadata[key]: value
//       },
//     });

//     const files = response.data.rows.map((file: any) => ({
//       name: file.metadata.name,
//       hash: file.ipfs_pin_hash,
//     }));

//     res.status(200).json({ files });
//   } catch (error) {
//     console.error("Error fetching files:", error);
//     res.status(500).json({ message: "Error fetching files" });
//   }
// }
