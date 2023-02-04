import AgentListItem from "./AgentListItem";

function DetectiveListIndex({ items }: any) {

    const isLoading = items.length === 0

    function renderContent() {
        if (isLoading) {
            return [...Array(3)].map((_, index) => (
            <AgentListItem key={index} isLoading={true} />
            ));
        } else if (items.length) {
            return items.map((item: any) => (
            <AgentListItem key={item._id} agent={item} />
            ));
        } else {
            return "Not found";
        }
    }
    


    return (
        <div className="space-y-4 relative">
            {renderContent()}
        </div>
    )
}

export default DetectiveListIndex;