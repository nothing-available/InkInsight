const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabaseId: String(import.meta.env.ITE_APPWRITE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}

export default config