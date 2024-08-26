import React, { useEffect, useState } from "react";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import axios from "axios";

interface FileData {
  name: string;
  hash: string;
}

const DisplayFiles: React.FC = () => {
  const { authState, ocAuth } = useOCAuth();
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch files from Pinata
  const fetchFilesFromIPFS = async () => {
    try {
      // Replace with your own API endpoint to retrieve files for the logged-in user
      const response = await axios.get('/api/get-files', {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
        },
      });

      if (response.data) {
        setFiles(response.data.files);
      }
    } catch (error) {
      console.error("Error fetching files from IPFS:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilesFromIPFS();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Uploaded Files</h1>
      {loading ? (
        <p>Loading files...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file) => (
            <div key={file.hash} className="p-2 border rounded">
              <img
                src={`https://example-gateway.mypinata.cloud/ipfs/${file.hash}`}
                alt={file.name}
                className="w-full h-auto"
              />
              <p className="mt-2 text-center">{file.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayFiles;
