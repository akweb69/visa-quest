import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const blogs = [
    {
        id: 1,
        title: "Understanding Visa Processes",
        description: "Learn the key steps to ensure a smooth visa application process.",
        details:
            "Visa applications involve numerous steps, including document preparation, fee payments, and interviews. It's important to start early and stay organized. Be sure to check the specific requirements for the country you're visiting. Double-check your documents to avoid mistakes. Always prepare well for your visa interview and answer confidently. Researching the immigration policies of the destination country will give you an edge. Consult experts if needed to ensure no delays. The visa approval process might take time, so patience is key. Remember to keep copies of all submitted documents for future reference. Having the right knowledge will save you from common pitfalls.",
        author: "John Doe",
        date: "December 5, 2024",
        image: "https://i.ibb.co/fp0dSG5/qq.webp",
    },
    {
        id: 2,
        title: "Top 5 Mistakes in Visa Applications",
        description: "Avoid these common mistakes when applying for your visa.",
        details:
            "Mistakes in visa applications can lead to rejections or delays. Common errors include incomplete forms, missing documents, and providing incorrect information. Always verify the form requirements and provide accurate details. Another common mistake is not adhering to photo guidelines. Late submissions or missing deadlines can also ruin your chances. Ensure your financial proof is sufficient and valid. Research the visa type and its requirements before applying. Avoid using unofficial channels or fake documents. Miscommunication during the visa interview can also result in rejection. Preparation is key to avoiding these common pitfalls.",
        author: "Jane Smith",
        date: "December 3, 2024",
        image: "https://i.ibb.co/TrgZQ31/qqq.jpg",
    },
    {
        id: 3,
        title: "Travel Tips for First-Time Flyers",
        description: "Essential tips to make your first flight stress-free and enjoyable.",
        details:
            "Flying for the first time can be intimidating, but proper preparation makes it smooth. Arrive at the airport early to avoid last-minute rushes. Pack your essentials in a carry-on bag for easy access. Always carry copies of important documents like your visa, passport, and ticket. Know your terminal and gate details before boarding. Be aware of security checks and follow guidelines. Research the airline's baggage policy to avoid extra charges. Stay hydrated during the flight and carry snacks. Prepare for time zone differences if traveling internationally. Familiarize yourself with the destination airport layout beforehand. Enjoy your journey with confidence.",
        author: "Mike Wilson",
        date: "December 1, 2024",
        image: "https://i.ibb.co/WKQdTJZ/qqqq.jpg",
    },
    {
        id: 4,
        title: "Choosing the Right Visa Type",
        description: "Understand the different types of visas and choose the best one for you.",
        details:
            "Choosing the right visa is critical for a successful application. Start by understanding the purpose of your visit, such as work, study, or tourism. Different visas have unique requirements, so gather all relevant details before applying. For example, a student visa requires proof of enrollment, while a work visa might need an employer's sponsorship letter. Ensure that you meet the eligibility criteria. Research visa durations, as some may allow short-term stays while others offer long-term benefits. If unsure, consult with an immigration expert to avoid errors. Applying for the wrong visa could lead to rejection or complications.",
        author: "Sarah Lee",
        date: "November 28, 2024",
        image: "https://i.ibb.co/16HTvZn/qqqqq.jpg",
    },
    {
        id: 5,
        title: "Top Destinations for Work Visas",
        description: "Explore the best countries to apply for a work visa.",
        details:
            "When considering work opportunities abroad, choosing the right destination is essential. Popular countries for work visas include the United States, Canada, Germany, and Australia. Each country offers unique opportunities depending on your skills and industry. The US is famous for tech and business roles, while Germany excels in engineering and manufacturing. Canada provides ample opportunities in healthcare and IT sectors. Consider factors like language, work culture, and visa policies before applying. Research job demand in your field and align your application accordingly. Working abroad can be rewarding, but it requires careful planning and execution.",
        author: "Chris Johnson",
        date: "November 25, 2024",
        image: "https://i.ibb.co/dbKq7Wc/qqqqqq.jpg",
    },
    {
        id: 6,
        title: "Visa Interview Preparation Tips",
        description: "Ace your visa interview with these expert tips.",
        details:
            "Preparing for a visa interview can make or break your application. Start by understanding the common questions asked, such as the purpose of your visit, duration of stay, and financial support. Practice answering confidently and clearly. Dress formally to make a good impression. Carry all necessary documents, including proof of funds, invitation letters, and travel plans. Be honest and avoid providing false information. Stay calm and maintain eye contact with the interviewer. Rehearse answers to potential tricky questions. The key is to demonstrate genuine intent and sufficient preparation for your trip.",
        author: "Emily Davis",
        date: "November 22, 2024",
        image: "https://i.ibb.co/4dX4wNG/qqqqqqq.jpg",
    },
    {
        id: 7,
        title: "Understanding Immigration Policies",
        description: "Stay updated with the latest immigration laws and policies.",
        details:
            "Immigration policies are constantly changing, and staying informed is crucial. Policies vary by country and impact visa application procedures, approval rates, and eligibility. Regularly check official government websites for updates. Changes in policies might include new visa categories, modified application fees, or additional requirements. Understanding these changes can help you prepare a stronger application. Consult legal experts or immigration advisors if the policies seem complex. Ignoring policy updates can lead to unnecessary delays or rejections. Keeping yourself updated ensures a smooth and hassle-free visa application process.",
        author: "David Brown",
        date: "November 20, 2024",
        image: "https://i.ibb.co/c6nGWFx/qqqqqqqq.jpg",
    },
    {
        id: 8,
        title: "The Role of Visa Consultants",
        description: "How visa consultants can simplify your application process.",
        details:
            "Visa consultants play a significant role in simplifying the application process. They provide guidance on choosing the right visa type, collecting required documents, and submitting applications. Consultants stay updated on the latest immigration policies, saving you time and effort. They can help you avoid common errors and improve your chances of approval. However, it’s crucial to choose a reliable and certified consultant. Research their track record and client reviews before hiring. While consultants are helpful, remember that the final responsibility of providing accurate information lies with you. Use their expertise to enhance your application success rate.",
        author: "Sophia Martinez",
        date: "November 18, 2024",
        image: "https://i.ibb.co/7JH7fpz/qqqqqqqqq.jpg",
    },
    {
        id: 9,
        title: "Studying Abroad: Visa Essentials",
        description: "Everything you need to know about student visas.",
        details:
            "Student visas are vital for studying abroad, and understanding the requirements is crucial. Start by securing admission to a recognized institution. Prepare financial proof to show your ability to cover tuition fees and living expenses. Ensure that your passport is valid for the entire study period. Be ready with supporting documents like transcripts, recommendation letters, and a statement of purpose. Check the visa processing times and apply well in advance. Some countries require medical check-ups or police clearance certificates. Follow the guidelines provided by the university and the immigration authority for a seamless process.",
        author: "Daniel Clark",
        date: "November 15, 2024",
        image: "https://i.ibb.co/Bq09pxm/qqqqqqqqqqqqqqqq.jpg",
    },
    {
        id: 10,
        title: "Post-Visa Approval Steps",
        description: "What to do after your visa is approved.",
        details:
            "Receiving visa approval is exciting, but there are post-approval steps to consider. Confirm your travel dates and book tickets early to avoid price hikes. Double-check the validity and conditions of your visa. Prepare necessary travel documents like your passport, visa copy, and travel insurance. Inform your employer, university, or host about your arrival plans. Familiarize yourself with the customs and regulations of the destination country. Arrange accommodation and transportation ahead of time. Keep emergency contacts handy, including local embassy details. Lastly, embrace the adventure and make the most of your journey.",
        author: "Olivia Wilson",
        date: "November 10, 2024",
        image: "https://i.ibb.co/PT6TbrR/q.webp",
    },
];


const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const closeModal = () => setSelectedBlog(null);

    return (
        <div className="bg-gray-100 py-12">
            <Helmet>
                <title> Blogs | Visa Quest</title>
            </Helmet>
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800">
                        Latest Blogs & Updates
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Stay informed with our latest articles and resources.
                    </p>
                </motion.div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                                <div className="flex items-center text-sm text-gray-500 mt-4">
                                    <FaUser className="mr-2 text-indigo-500" />
                                    {blog.author}
                                    <FaCalendarAlt className="ml-4 mr-2 text-indigo-500" />
                                    {blog.date}
                                </div>
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
                                >
                                    Read More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedBlog && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                >
                                    ✖
                                </button>

                                {/* Modal Image */}
                                <img
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />

                                {/* Modal Title */}
                                <h3 className="text-2xl font-bold text-gray-800 mt-4">
                                    {selectedBlog.title}
                                </h3>

                                {/* Author and Date */}
                                <p className="text-sm text-gray-500 mt-2">
                                    By {selectedBlog.author} - {selectedBlog.date}
                                </p>

                                {/* Blog Details */}
                                <p className="text-gray-700 mt-4">{selectedBlog.details}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default Blogs;
