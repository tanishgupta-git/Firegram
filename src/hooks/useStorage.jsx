import {useState,useEffect} from 'react'
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';

const useStorage = (file)  => {
    const [progress,Setprogress] = useState(0);
    const [error,Seterror] = useState(null);
    const [url,Seturl] = useState(null);
    useEffect(() => {
     // references 
     const storageRef = projectStorage.ref(file.name);
     const collectionRef = projectFirestore.collection('images');

      storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          Setprogress(percentage);

      },(err) => {
          Seterror(err);
      },async () => {
         const url = await storageRef.getDownloadURL();
         const createdAt = timestamp();
         collectionRef.add({url,createdAt})
         Seturl(url);

      }) 
    }, [file]);

    return { progress,url,error}
}

export default useStorage;