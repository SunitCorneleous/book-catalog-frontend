import { motion } from "framer-motion";
import ActionButton from "./ActionButton";

function ConfirmModal({ modalHandler }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-blue-400 bg-opacity-40 flex justify-center items-center"
    >
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="relative min-w-[500px] min-h-[300px] bg-white rounded-lg flex flex-col justify-center items-center shadow-black shadow-md"
      >
        <h1 className="text-primary font-semibold text-xl">
          Are you sure you want to delete this book?
        </h1>

        <div className="mt-4">
          <ActionButton className="mr-4">Confirm</ActionButton>
          <ActionButton onClickHandler={modalHandler}>Cancel</ActionButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ConfirmModal;
