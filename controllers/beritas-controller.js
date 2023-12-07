import express, { request, response } from "express";
import { createBerita, getBeritaByDate, getBeritaById, getEdukasi3, getEkonomi3, getGayahidup3, getHiburan3, getOlahraga3, getOtomotif3, getPolitik3, getTeknologi3, readBerita } from "../services/Beritas-services.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaHiburanHome = async (request, response) => {
    const beritaHiburan = await getHiburan3();

    console.log({ beritaHiburan });

    response.status(200).json({
        data: beritaHiburan,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaEdukasiHome = async (request, response) => {
    const beritaEdukasi = await getEdukasi3();

    console.log({ beritaEdukasi });

    response.status(200).json({
        data: beritaEdukasi,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaGayahidupHome = async (request, response) => {
    const beritaGayahidup = await getGayahidup3();

    console.log({ beritaGayahidup });

    response.status(200).json({
        data: beritaGayahidup,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaPolitikHome = async (request, response) => {
    const beritaPolitik = await getPolitik3();

    console.log({ beritaPolitik });

    response.status(200).json({
        data: beritaPolitik,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaOlahragaHome = async (request, response) => {
    const beritaOlahraga = await getOlahraga3();

    console.log({ beritaOlahraga });

    response.status(200).json({
        data: beritaOlahraga,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaOtomotifHome = async (request, response) => {
    const beritaOtomotif = await getOtomotif3();

    console.log({ beritaOtomotif });

    response.status(200).json({
        data: beritaOtomotif,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaEkonomiHome = async (request, response) => {
    const beritaEkonomi = await getEkonomi3();

    console.log({ beritaEkonomi });

    response.status(200).json({
        data: beritaEkonomi,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaTeknologiHome = async (request, response) => {
    const beritaTeknologi = await getTeknologi3();

    console.log({ beritaTeknologi });

    response.status(200).json({
        data: beritaTeknologi,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaTerbaru = async (request, response) => {
    const beritaTerbaru = await getBeritaByDate();

    if (beritaTerbaru.length > 0) {
        response.status(200).json({
            message: 'Success',
            data:beritaTerbaru,
        });
    } else {
        response.status(404).json({
            message: 'Berita tidak ditemukan',
        });
    }
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaItem = async (request, response) => {
    const id = request.params.id;

    const berita = await getBeritaById(id);

    if(berita === null) {
        return response.status(404).json({
            message: "Data not Found",
        });
    }

    response.status(200).json({
        data: berita,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritas = async (request, response) => {
    const beritaList = await readBerita();

    console.log({ beritaList });

    response.status(200).json({
        data: beritaList,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postBeritaItem = async (request, response) => {
    const { judul, deskripsi, foto, publish_date, kategori, penulis } = request.body;

    const berita = await createBerita(judul, deskripsi, foto, publish_date, kategori, penulis);

    response.json(berita);
};