import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const images = [
    "https://i.ibb.co.com/23YZ7P6/cccccccccccc.jpg",
    "https://i.ibb.co.com/bKQMRRL/cccccccccc.jpg",
    "https://i.ibb.co.com/YW0L7N2/cccccc.jpg",
    "https://i.ibb.co.com/kXx6Ghz/c.jpg",
    "https://i.ibb.co.com/C5vrKZL/iiiiiiiiiiiiiiii.jpg",
    "https://i.ibb.co.com/N6wb0Gt/iiii.jpg",
    "https://i.ibb.co.com/qFHctyp/iii.webp",
    "https://i.ibb.co.com/sVPyDbX/ii.jpg",
    "https://i.ibb.co.com/mbrW7bJ/i.webp",
    "https://i.ibb.co.com/47FNjHc/bbbbbbbbbb.jpg",
    "https://i.ibb.co.com/cY3R02P/bbbbbbb.jpg",
    "https://i.ibb.co.com/CzpbdgG/bbb.jpg",
    "https://i.ibb.co.com/qJcMzpc/bb.jpg",
    "https://i.ibb.co.com/HrJFLRn/bb.png",
    "https://i.ibb.co.com/HKwbfyd/uuuuuuuu.jpg",
    "https://i.ibb.co.com/jT4sJLZ/uuuu.jpg",
    "https://i.ibb.co.com/mbD576w/uuu.jpg",
    "https://i.ibb.co.com/kHBfnS9/uu.jpg",
    "https://i.ibb.co.com/2ZT8GbK/u.jpg",
    "https://i.ibb.co.com/ScNjwPV/flag.png",
    "https://i.ibb.co.com/PNr8xs3/hhhh.jpg",
    "https://i.ibb.co.com/x8RRyZ7/hhh.jpg",
    "https://i.ibb.co.com/XssQPnT/hh.jpg",
    "https://i.ibb.co.com/txFMDRv/h.jpg",
    "https://i.ibb.co.com/0tgP33w/eeeeeeeeeee.jpg",
    "https://i.ibb.co.com/WpR1gtH/eeeee.jpg",
    "https://i.ibb.co.com/JtDm5YS/eee.jpg",
    "https://i.ibb.co.com/GMt1nFP/ee.png",
    "https://i.ibb.co.com/TBN3wSF/kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.jpg",
    "https://i.ibb.co.com/wMwZK28/kkkkkkkkkkkkkkkkkkkkkkkkkkkkk.jpg",
    "https://i.ibb.co.com/jT5TByh/kkkkkkkkkkkkkkkkkkkkkkkkk.jpg",
    "https://i.ibb.co.com/ZmhDfDJ/kkkkkkkkkkkkkkkkk.jpg",
    "https://i.ibb.co.com/kB5SrQx/kkkkkk.jpg",
    "https://i.ibb.co.com/YTd6n8M/xxxxx.jpg",
    "https://i.ibb.co.com/Ykf8JTb/xxxx.jpg",
    "https://i.ibb.co.com/kGHNHpZ/xxx.jpg",
    "https://i.ibb.co.com/mzJwXgf/xx.jpg",
    "https://i.ibb.co.com/KrqtBJ2/x.jpg",
    "https://i.ibb.co.com/6XSJZw8/gggggggggggggg.png",
    "https://i.ibb.co.com/19BcQvL/ggggg.jpg",
    "https://i.ibb.co.com/3h01VjQ/ggg.jpg",
    "https://i.ibb.co.com/8YQHwcB/gg.jpg",
    "https://i.ibb.co.com/54zksFW/g.jpg",
    "https://i.ibb.co.com/1ZNZ8TD/vvvvvvvvvvvvvvvvv.jpg",
    "https://i.ibb.co.com/18391wB/vvv.jpg",
    "https://i.ibb.co.com/TkVGGKc/v.jpg",
    "https://i.ibb.co.com/g4yvYmX/vvvvv.png",
    "https://i.ibb.co.com/yqkwYn8/zzzzzzzzzzzzz.png",
    "https://i.ibb.co.com/HD09b8v/zzzz.jpg",
    "https://i.ibb.co.com/QJzh8Ss/zzz.jpg",
    "https://i.ibb.co.com/zZYjy2R/zz.jpg",
    "https://i.ibb.co.com/Z6Z187Y/z.jpg",
    "https://i.ibb.co.com/N1BdCLF/111111111111111111111.jpg",
    "https://i.ibb.co.com/Jrjs2q8/111111111111.jpg",
    "https://i.ibb.co.com/tswyGxg/111111111.jpg",
    "https://i.ibb.co.com/rcmgxbF/111.jpg",
    "https://i.ibb.co.com/NrmNb4v/11.png",
    "https://i.ibb.co.com/X8w8XrJ/dddddddddddddddd.jpg",
    "https://i.ibb.co.com/mGQps4Z/dddddd.jpg",
    "https://i.ibb.co.com/pLtBr0H/ddddd.jpg",
    "https://i.ibb.co.com/wdPv4wR/d.jpg",
    "https://i.ibb.co.com/ctBGp53/sssssssssssss.jpg",
    "https://i.ibb.co.com/vhGvTFX/sssss.jpg",
    "https://i.ibb.co.com/ypj7ybx/sss.webp",
    "https://i.ibb.co.com/M1XqT1d/ss.webp",
    "https://i.ibb.co.com/58yQ3dF/s.png",
    "https://i.ibb.co.com/yBmGTb2/mmmmmmmmmmm.png",
    "https://i.ibb.co.com/D8H4kSs/mmmm.webp",
    "https://i.ibb.co.com/dLzCjJj/mmm.jpg",
    "https://i.ibb.co.com/smwhDkc/mm.jpg",
    "https://i.ibb.co.com/djpG85g/m.jpg",
    "https://i.ibb.co.com/MP2BhNN/tttttt.webp",
    "https://i.ibb.co.com/Kx1TgKh/tttt.jpg",
    "https://i.ibb.co.com/FmvcDnr/ttt.jpg",
    "https://i.ibb.co.com/KsNDHwG/tt.jpg",
    "https://i.ibb.co.com/8X7vtZq/t.webp",
    "https://i.ibb.co.com/cCXt0pW/nnnnnnnnnnnn.jpg",
    "https://i.ibb.co.com/zVBSHmJ/nnnnn.webp",
    "https://i.ibb.co.com/s3srMyL/nnn.webp",
    "https://i.ibb.co.com/L11t64W/nn.jpg",
    "https://i.ibb.co.com/hd84M8H/n.webp",
    "https://i.ibb.co.com/nDRm8ft/ccccccccccccccccccc.jpg",
    "https://i.ibb.co.com/gVBFHnC/ccccccccccccccc.jpg",
    "https://i.ibb.co/TrgZQ31/qqq.jpg",
    "https://i.ibb.co/WKQdTJZ/qqqq.jpg",
    "https://i.ibb.co/16HTvZn/qqqqq.jpg",
    "https://i.ibb.co/dbKq7Wc/qqqqqq.jpg",
    "https://i.ibb.co/4dX4wNG/qqqqqqq.jpg",
    "https://i.ibb.co/c6nGWFx/qqqqqqqq.jpg",
    "https://i.ibb.co/7JH7fpz/qqqqqqqqq.jpg",
    "https://i.ibb.co/Bq09pxm/qqqqqqqqqqqqqqqq.jpg",
    "https://i.ibb.co/PT6TbrR/q.webp"
];


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [visibleImages, setVisibleImages] = useState(30);

    const handleShowMore = () => {
        setVisibleImages(images.length);
    };

    return (
        <div className="bg-gray-100 py-12  ">
            <Helmet>
                <title>Gellery | Visa Quest</title>
            </Helmet>
            <div className="container md:w-10/12  mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800">
                        See The World</h2>
                    <p className="text-gray-600 mt-2">Click on any image to view it in full size.</p>
                </motion.div>

                {/* Main Image Display */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-96 flex justify-center items-center mb-8"
                >
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-h-full max-w-full object-cover rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.slice(0, visibleImages).map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <img
                                src={img}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-40 object-cover rounded-lg cursor-pointer"

                            />
                            <motion.div
                                onClick={() => setSelectedImage(img)}
                                className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            >
                                <p className="text-white font-bold">Click to view</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Show More Button */}
                {visibleImages < images.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
