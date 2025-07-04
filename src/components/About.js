// src/components/About.js
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase/config";
import profileImg from "../assets/profile.jpg";
import {
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaGlobe,
  FaVenusMars,
  FaTint,
  FaBirthdayCake,
  FaHeart,
  FaBuilding,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const biodataRef = ref(database, "biodata");
    onValue(biodataRef, (snapshot) => {
      const data = snapshot.val();

      // Jika data berupa objek dengan ID acak
      if (data && typeof data === "object" && !data.nama_lengkap) {
        const firstItem = Object.values(data)[0];
        setData(firstItem);
      } else {
        setData(data);
      }
    });
  }, []);

  if (!data)
    return (
      <div className="text-center section">
        <p className="lead">Memuat data biodata...</p>
        <div className="spinner"></div>
      </div>
    );

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Profil Saya</h2>
        <img src={profileImg} alt="Foto Profil" className="profile-img" />
        <p className="lead">Berikut adalah informasi lengkap tentang saya:</p>

        <div
          className="tentang-saya"
          style={{
            maxWidth: "720px",
            margin: "0 auto 30px auto",
            textAlign: "left",
            fontSize: "16px",
            backgroundColor: "#fff8f8",
            padding: "20px",
            borderRadius: "12px",
            borderLeft: "4px solid #ffc0cb",
          }}
        >
          <p>
            Saya lahir dan besar di Timika Papua. Orang tua saya asli Manado.
            Ayah saya bekerja di PT Freeport Indonesia dan ibu saya seorang ibu
            rumah tangga.
          </p>
          <p>
            Saya sangat menyukai mie instan—itu adalah makanan favorit saya!
            Warna kesukaan saya adalah pink dan putih. Saya juga sangat senang
            bermain game, hampir semua jenis game saya sukai. Dulu saya
            bercita-cita menjadi seorang gamer.
          </p>
          <p>
            Sekarang saya sedang kuliah di jurusan Informatika di Universitas
            Klabat, Sulawesi Utara. Hobi saya adalah menari dan menyanyi—saya
            sering membuat cover dance dan lagu. Cita-cita saya sekarang adalah
            menjadi seorang anak IT yang pintar agar dapat membanggakan orang
            tua saya, dan juga memuliakan Tuhan.
          </p>
        </div>

        <ul className="info-list">
          <li>
            <FaUser /> <strong>Nama Lengkap:</strong> {data.nama_lengkap}
          </li>
          <li>
            <FaEnvelope /> <strong>Email:</strong> {data.email}
          </li>
          <li>
            <FaUniversity /> <strong>NIM:</strong> {data.nim}
          </li>
          <li>
            <FaHeart /> <strong>Agama:</strong> {data.agama}
          </li>
          <li>
            <FaVenusMars /> <strong>Jenis Kelamin:</strong> {data.jenis_kelamin}
          </li>
          <li>
            <FaTint /> <strong>Golongan Darah:</strong> {data.golongan_darah}
          </li>
          <li>
            <FaGlobe /> <strong>Kewarganegaraan:</strong> {data.kewarganegaraan}
          </li>
          <li>
            <FaBirthdayCake /> <strong>Tempat Tanggal Lahir:</strong>{" "}
            {data.tempat_tanggal_lahir}
          </li>
          <li>
            <FaPhone /> <strong>No Telepon:</strong> {data.no_telepon}
          </li>
          <li>
            <FaBuilding /> <strong>Fakultas:</strong> {data.fakultas}
          </li>
          <li>
            <FaUniversity /> <strong>Program Studi:</strong>{" "}
            {data.program_studi}
          </li>
          <li>
            <FaBuilding /> <strong>Organisasi:</strong> {data.organisasi}
          </li>
          <li>
            <FaHeart /> <strong>Minat dan Hobi:</strong> {data.minat_dan_hobi}
          </li>
          <li>
            <FaCalendarAlt /> <strong>Tahun Masuk:</strong> {data.tahun_masuk}
          </li>
          <li>
            <FaUniversity /> <strong>Universitas:</strong> {data.universitas}
          </li>
        </ul>

        <footer className="site-footer">
          <p>© 2025 {data.nama_lengkap}</p>
        </footer>
      </div>
    </section>
  );
}
