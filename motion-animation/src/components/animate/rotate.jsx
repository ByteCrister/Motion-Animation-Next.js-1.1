// "use client";

// import MotionWrapper from "../motion/MotionWrapper"
import * as motion from "motion/react-client"

const Rotate = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3 }}
            className='w-[200px] h-[200px] bg-red-600 border-teal-900 border-spacing-1 rounded'
        >
            <h2 className='text-red-900 text-lg text-center'>Rotate</h2>
        </motion.div>
    )
}

export default Rotate