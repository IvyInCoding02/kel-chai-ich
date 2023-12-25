import React, { useEffect, useState } from 'react';
import { db } from '../../../api/firebase';
import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore';
import styles from "../adminscholarships.module.css";


function AdminScholarships() {
    const [scholarships, setScholarships] = useState([]);
    const scholarshipsCollectionRef = collection(db, "scholarships");
   
  
  
      const getScholarships = async () => {
        const data = await getDocs(scholarshipsCollectionRef);
        setScholarships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       
      };
  
    const q = query(collection(db, 'scholarships'), where('category', '==', categoryFilter));
  useEffect(() => {
    getDocs(q)
    .then((querySnapshot) => {
      if(categoryFilter == "All"){
        getScholarships();
      }else{
        console.log(querySnapshot)
        const scholarshipsArray = []
        querySnapshot.forEach((doc) => {
          // doc.data() содержит данные документа
          const data = doc.data();
          console.log(data);
          scholarshipsArray.push(data)
        });
        setScholarships(scholarshipsArray);
      } 
    })
    .catch((error) => {
      console.error('Server Error:', error);
    });
  },[categoryFilter])
  
  
    return (
      <div>
        <div className={styles.headline}>
          <h1 className={styles.headlineTitle}>Scholarships Update and Delete</h1>
        </div>
        <div className={listView ? styles.container : styles["card"]}>
          {scholarships.map((scholarship) => {
            return (
              <div className={styles.wrapper}>
                 <img
                    src={scholarship.image}
                    className={styles.img}
                    alt="scholarship image"
                  />
                <div className={styles.info}>
                  <h1 className={styles.title}>{scholarship.title}</h1>
                  <p className={styles.fund}>Scholarship: {scholarship.fund}</p>
                  <p className={styles.category}>
                    Category: {scholarship.category}
                  </p>
                  <p className={styles.deadline}>
                    Deadline: {scholarship.deadline}
                  </p>
                  <p className={styles.country}>Country: {scholarship.country}</p>
                  <p className={styles.country}>
                    Requirements: {scholarship.requirements}
                  </p>
                  <a className={styles.more} href={scholarship.link}>
                    Learn more
                  </a>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default AdminScholarships;