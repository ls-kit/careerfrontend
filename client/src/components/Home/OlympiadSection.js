import React from 'react';
import OlympiadBox from '../shared/OlympiadBox'

const OlympiadSection = () => {
    return (
        <div className="my-20 container mx-auto px-3">
            <div>
                <h1 className="text-4xl font-bold flex-auto my-10 text-red-700 text-center">Olympiad Segments</h1>
            </div>

            <div className="gap-4 columns-4">
                <div>
                    <OlympiadBox />
                </div>
                <div>
                    <OlympiadBox />
                </div>
                <div>
                    <OlympiadBox />
                </div>
                <div>
                    <OlympiadBox />
                </div>
            </div>
        </div>
    );
    }

export default OlympiadSection;