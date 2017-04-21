$( window ).load(function() {

    // Actions which window should be maximized
    var myActions = ["AgentTicketCompose",
                     "AgentTicketNote",
                     "AgentTicketFreeText",
                     "AgentTicketPhoneOutbound",
                     "AgentTicketPhoneInbound",
                     "AgentTicketAskApproval",
                     "AgentTicketDecisionMove",
                     "AgentTicketMove",
                     "AgentTicketPriority",
                     "AgentLinkObject",
                     "AgentTicketProcess",
                     "AgentTicketPending",
                     "AgentTicketClose"];
            
    if(myActions.indexOf(Core.Config.Get('Action'))>-1){
        window.moveTo(0,0);
        window.resizeTo(top.screen.availWidth, top.screen.availHeight);
    }
});


