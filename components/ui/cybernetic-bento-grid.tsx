import React, { useEffect, useRef } from 'react';
import './cybernetic-bento-grid.css';

// Reusable BentoItem component
const BentoItem = ({ className, children, lightMode = false }: { className?: string; children: React.ReactNode; lightMode?: boolean }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item ${className} ${lightMode ? 'light-mode' : ''}`}>
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = ({ lightMode = false }) => {
    return (
        <div className="main-container">
            <div className="w-full max-w-6xl z-10">
                <h1 className={`text-4xl sm:text-5xl font-bold text-center mb-8 ${lightMode ? 'text-black' : 'text-white'}`}>What Makes Us Different</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between" lightMode={lightMode}>
                        <div>
                            <h2 className={`text-2xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Data-Driven Insights</h2>
                            <p className={`mt-2 ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Harness real-time analytics to make informed decisions. Track metrics that matter and optimize for measurable growth.</p>
                        </div>
                        <div className={`mt-4 h-48 rounded-lg flex items-center justify-center ${lightMode ? 'bg-gray-200 text-gray-400' : 'bg-neutral-800 text-gray-500'}`}>
                            Chart Placeholder
                        </div>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Global Performance</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Lightning-fast delivery across continents. Your users experience seamless performance worldwide.</p>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Enterprise Security</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Bank-level security with sophisticated authentication. Protect what matters with zero-trust architecture.</p>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Smart Integration</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Unified API orchestration for seamless system integration. Connect everything with intelligent routing.</p>
                    </BentoItem>
                    <BentoItem className="row-span-2" lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Disaster Recovery</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Zero data loss with intelligent backup strategies. Instant recovery keeps your operations running 24/7.</p>
                    </BentoItem>
                    <BentoItem className="col-span-2" lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Serverless Architecture</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Auto-scaling infrastructure that grows with your business. Pay only for what you use, scale infinitely.</p>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Developer Tools</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Powerful CLI and APIs for full control. Automate everything from your terminal.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
