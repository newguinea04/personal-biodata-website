import React, { useEffect, useState } from "react";
import { database } from "../Firebase/config";
import { ref, get, child } from "firebase/database";

const Biodata = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "biodata"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Firebase Error:", error);
      });
  }, []);

  if (!data) return <p className="text-center">Loading...</p>;

  return (
    <section id="biodata" className="section bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="title">Tentang Saya</h2>
          <p className="subtitle">
            Berikut adalah informasi lengkap tentang saya.
          </p>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="biodata-box p-4 rounded shadow bg-white">
              <ul className="list-unstyled">
                {Object.entries(data).map(([key, value]) => (
                  <li className="mb-3" key={key}>
                    <i className="fa fa-user mr-2 text-primary"></i>
                    <strong className="text-dark">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                      :
                    </strong>{" "}
                    <span className="text-muted">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodata;
