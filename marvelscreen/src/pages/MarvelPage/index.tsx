import MarvelItem from "../../components/MarvelItem";
import SideBar from "../../components/SideBar";
import { ContainerDashboard, BoxDashboard } from "../Dashboard/style";
import { motion } from "framer-motion";

const MarvelPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContainerDashboard>
        <SideBar />
        <BoxDashboard>
          <MarvelItem />
        </BoxDashboard>
      </ContainerDashboard>
    </motion.div>
  );
};

export default MarvelPage;
