package org.acme.ressources;

import jakarta.ws.rs.Path;

import org.acme.repository.QrCodeRepo;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;






@Path("/qrcode")
public class QrCodeResource {

    @GET
    @Produces("image/png")
    @Path("/magikarp")
    public Response magikarpQrCode() {
        return QrCodeRepo.getQrCodeFromString("https://subaqua.ffessm.fr/article/surexploitation-des-especes-et-risque-dextinction-la-reponse-des-chercheurs");   
    }

    @GET
    @Produces("image/png")
    @Path("/gyrados")
    public Response gyradosQrCode(){
        return QrCodeRepo.getQrCodeFromString("https://www.geo.fr/environnement/ces-especes-marines-qui-recyclent-nos-dechets-222925");   
    }

    @GET
    @Produces("images/png")
    @Path("/lanturn")
    public Response lanturnQrCode(){
        return QrCodeRepo.getQrCodeFromString("https://www.frcneurodon.org/comprendre-le-cerveau/le-cerveau-malade-et-ses-maladies-neurologiques/");
    }
}