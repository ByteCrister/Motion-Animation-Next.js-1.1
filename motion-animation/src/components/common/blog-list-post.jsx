import * as motion from "motion/react-client"

const BlogList = ({ post }) => {

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{
                duration: 0.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
            }}
            className="bg-slate-300 p-1 rounded">
            <h2 className="text-gray-800 text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-800 text-xl">{post.body}</p>
        </motion.div>
    )
};

export default BlogList