import Feedback from "../components/Feedback";
import InspirationSection from "../components/InspirationSection";
import Introduction from "../components/Introduction";
import PersonalizedSuggestions from "../components/PersonalizedSuggestions";
import ResourceRecommendations from "../components/ResourceRecommendations";
import SetCareerGoals from "../components/SetCareerGoals";
import TrackProgress from "../components/TrackProgress";

const CareerPlanner = () => {
    return (
        <div>
            <Introduction/>
            <div className="flex flex-col md:flex-row gap-8 w-4/5 mx-auto my-8">
            <SetCareerGoals/>
            <TrackProgress/>r
            </div>
            {/* <ResourceRecommendations/>
            <Feedback/> */}
            <div>
                <PersonalizedSuggestions/>
            </div>
            <div>
                <InspirationSection/>
            </div>
        </div>
    );
};

export default CareerPlanner;