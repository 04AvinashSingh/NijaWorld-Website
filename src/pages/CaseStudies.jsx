import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudies() {
    const caseStudies = [
        {
            id: 1,
            category: "PRIVATE CREDIT",
            title: "Liquidity Enablement for Tokenised Private Credit Notes",
            description: "Transforming private credit markets through institutional-grade tokenisation and liquidity infrastructure.",
            industry: "Financial Services / Private Credit",
            kpiHighlight: "Reduced settlement cycle by 30–55%",
            tags: ["RWA Liquidity", "Tokenisation", "Governance", "Reporting"],
            icon: "💎",
            gradientFrom: "from-nijaGreen/20",
            gradientTo: "to-nijaPurple/20",
            link: "/case-studies/rwa-liquidity-private-credit-notes"
        },
        {
            id: 2,
            category: "REAL ESTATE",
            title: "Controlled Liquidity for Tokenised Real Estate Cashflow Entitlements",
            description: "Enabling controlled secondary markets for tokenised real estate cashflow rights with investor protections.",
            industry: "Real Estate / Investment Operations",
            kpiHighlight: "Reduced admin overhead by 20–40%",
            tags: ["RWA Liquidity", "Governance", "Investor Controls", "Reporting"],
            icon: "🏛️",
            gradientFrom: "from-nijaPurple/20",
            gradientTo: "to-nijaGreen/20",
            link: "/case-studies/rwa-liquidity-real-estate-cashflows"
        }
    ];

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Proven delivery in real environments
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Featured Case Studies Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 overflow-hidden group transition-all duration-500 ${study.id === 1
                                    ? 'hover:shadow-[0_0_40px_rgba(0,255,157,0.4)] dark:hover:shadow-[0_0_40px_rgba(0,255,157,0.3)]'
                                    : 'hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] dark:hover:shadow-[0_0_40px_rgba(138,43,226,0.3)]'
                                    }`}
                            >
                                {/* Gradient Overlay Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradientFrom} ${study.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${study.gradientFrom} ${study.gradientTo} blur-3xl opacity-30`}></div>
                                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${study.gradientTo} ${study.gradientFrom} blur-3xl opacity-20`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Top Section: Category Label */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                                            {study.category}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 mb-4 flex items-center justify-center text-4xl bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                        {study.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
                                        {study.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {study.description}
                                    </p>

                                    {/* KPI Highlight - Subtle emphasis */}
                                    <p className="text-sm italic text-gray-500 dark:text-gray-500 mb-6">
                                        {study.kpiHighlight}
                                    </p>

                                    {/* Bottom Section: CTA */}
                                    <div className="flex justify-center pt-4">
                                        {study.link ? (
                                            <Link to={study.link}>
                                                <button className={`${study.id === 1
                                                    ? 'bg-nijaGreen hover:bg-green-500 shadow-nijaGreen/30 hover:shadow-nijaGreen/50'
                                                    : 'bg-nijaPurple hover:bg-purple-600 shadow-nijaPurple/30 hover:shadow-nijaPurple/50'
                                                    } text-white px-8 py-3.5 text-base rounded-full font-medium transition shadow-lg transform hover:scale-105`}>
                                                    View Case
                                                </button>
                                            </Link>
                                        ) : (
                                            <button className={`${study.id === 1
                                                ? 'bg-nijaGreen hover:bg-green-500 shadow-nijaGreen/30 hover:shadow-nijaGreen/50'
                                                : 'bg-nijaPurple hover:bg-purple-600 shadow-nijaPurple/30 hover:shadow-nijaPurple/50'
                                                } text-white px-8 py-3.5 text-base rounded-full font-medium transition shadow-lg transform hover:scale-105`}>
                                                View Case
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-nijaGreen dark:hover:border-nijaGreen">
                            Browse All Case Studies
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
