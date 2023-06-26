import { motion } from "framer-motion";
import MarvelCard from "../../components/MarvelCard";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import SideBar from "../../components/SideBar";

import { ContainerDashboard, BoxDashboard } from "./style";
const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerDashboard>
        <SideBar />
        <BoxDashboard>
          <Header />
          <MarvelCard />
          <Buttons />
        </BoxDashboard>
      </ContainerDashboard>
    </motion.div>
  );
};

export default Dashboard;
