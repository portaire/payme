import AgentListItem from "./AgentListItem";

function DetectiveListIndex({ items }: any) {

    return (
        <div className="space-y-4 relative">
            {items.length !== 0 && items.map((item: any) => (
                <AgentListItem key={item._id} agent={item} />
            ))}
        </div>
    )
}

export default DetectiveListIndex;