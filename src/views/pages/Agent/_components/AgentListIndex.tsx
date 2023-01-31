import AgentListItem from "./AgentListItem";

function DetectiveListIndex({ items, isLoading }: any) {

    return (
        <div className="space-y-4 relative">
            {items.length !== 0 && items.map((item: any) => (
                <AgentListItem key={item._id} agent={item} isLoading={isLoading}/>
            ))}
        </div>
    )
}

export default DetectiveListIndex;