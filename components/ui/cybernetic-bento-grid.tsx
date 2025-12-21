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
                <h1 className={`text-4xl sm:text-5xl font-bold text-center mb-8 ${lightMode ? 'text-black' : 'text-white'}`}>Core Features</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between" lightMode={lightMode}>
                        <div>
                            <h2 className={`text-2xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Real-time Analytics</h2>
                            <p className={`mt-2 ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Monitor your application's performance with up-to-the-second data streams and visualizations.</p>
                        </div>
                        <div className={`mt-4 h-48 rounded-lg flex items-center justify-center ${lightMode ? 'bg-gray-200 text-gray-400' : 'bg-neutral-800 text-gray-500'}`}>
                            Chart Placeholder
                        </div>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Global CDN</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Deliver content at lightning speed, no matter where your users are.</p>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Secure Auth</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Enterprise-grade authentication and user management built-in.</p>
                    </BentoItem>
                    <BentoItem className="row-span-2" lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Automated Backups</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Your data is always safe with automated, redundant backups.</p>
                    </BentoItem>
                    <BentoItem className="col-span-2" lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>Serverless Functions</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Run your backend code without managing servers. Scale infinitely with ease.</p>
                    </BentoItem>
                    <BentoItem lightMode={lightMode}>
                        <h2 className={`text-xl font-bold ${lightMode ? 'text-black' : 'text-white'}`}>CLI Tool</h2>
                        <p className={`mt-2 text-sm ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>Manage your entire infrastructure from the command line.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
