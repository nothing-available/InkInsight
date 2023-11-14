import { Client, ID, Storage } from "appwrite";
import config from "../config/config";

export class StorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log("error uploading file", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("error deleting file", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const storageService = new StorageService();

export default storageService;