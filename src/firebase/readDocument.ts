import {
  collection,
  doc,
  getDoc,
  getDocs,
  or,
  query,
  QueryCompositeFilterConstraint,
  QueryFieldFilterConstraint,
  where,
} from "firebase/firestore";
import { db } from ".";

export const readDocument = async <DocumentType>(
  collectionName: string,
  uuid: string
) => {
  const docRef = doc(db, collectionName, uuid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as DocumentType;
  } else {
    // docSnap.data() will be undefined in this case
    return null;
  }
};

export const readDocuments = async <DocumentType>(
  collectionName: string,
  queries?: QueryFieldFilterConstraint[] | QueryCompositeFilterConstraint
) => {
  const q =
    queries instanceof QueryCompositeFilterConstraint
      ? query(collection(db, collectionName), queries)
      : query(collection(db, collectionName), ...queries);

  const rolesSnapshot = await getDocs(q);

  const data = [] as DocumentType[];

  rolesSnapshot.forEach((doc) => {
    data.push(doc.data() as DocumentType);
  });

  return data;
};
