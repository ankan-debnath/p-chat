import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic("eec6d313-592b-4199-9e94-7a086fc75d20", props.user.username, props.user.secret);
    chatProps.onConnect().then(()=> console.log(`${props.user.username} connected with chat-engine`));
    // chatProps.onAuthFail().then(()=> console.log("Authentication failed"));

    return (
        <div style={{height : "100vh"}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height : "100%"}}/>
        </div>
    );
}

export default ChatsPage;