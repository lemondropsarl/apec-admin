import Head from "next/head";
import MetricCard from "../components/Card/MetricCard";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <MetricCard
          styles="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600"
          backGroundCard="bg-green-600"
          iconCard="fa fa-wallet fa-2x fa-inverse"
          nameCard="Total Revenue"
          valueCard="$ 36540"
          textColor="text-green-600"
        />
        <MetricCard
          styles="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-600"
          backGroundCard="bg-pink-600"
          iconCard="fas fa-users fa-2x fa-inverse"
          nameCard="Total membres"
          valueCard="10 000"
          textColor="text-pink-500"
          secondaryStyles="fas fa-exchange-alt"
        />
        <MetricCard
          styles="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600"
          backGroundCard="bg-blue-600"
          iconCard="fas fa-tasks fa-2x fa-inverse"
          nameCard="Total propjets"
          valueCard="5"
          textColor="text-blue-500"
        />
      </div>
      <div className="flex  flex-col flex-grow mt-20 justify-center items-center">
        <h1 className=" text-3xl font-bold">
          Maquette Systeme de gestion APEC
        </h1>
        <p className="mt-12 p-4 justify-center items-center font-medium w-1/2 text-justify">
          Ce Système de gestion APEC est un outil de gestion de projet de
          l'APEC, ses membres et autres. ce sytème va nous permettre d'avoir des
          informations correctes concernants les activités du Partie esur le
          plan National et ses Federations.
        </p>
      </div>
    </>
  );
}
