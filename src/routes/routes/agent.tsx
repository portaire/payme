import AgentList from "views/pages/Agent/AgentList";
import AgentView from "views/pages/Agent/AgentView";

export default [
    {
        path: "/agents",
        element: <AgentList />
    },
    {
        path: "/agents/:id",
        element: <AgentView />
    },
]