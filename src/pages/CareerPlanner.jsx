import Feedback from "../components/Feedback";
import ResourceRecommendations from "../components/ResourceRecommendations";
import SetCareerGoals from "../components/SetCareerGoals";
import TrackProgress from "../components/TrackProgress";

const CareerPlanner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 w-4/5 mx-auto mb-8">
            <SetCareerGoals/>
            <TrackProgress/>r
            </div>
            <ResourceRecommendations/>
            <Feedback/>
        </div>
    );
};

export default CareerPlanner;