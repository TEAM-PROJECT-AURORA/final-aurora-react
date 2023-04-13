import { useParams } from "react-router";


function SurveyDetail() {

    const {surveyCode} = useParams();

    return (
        <>
            <iframe 
                style={{width:'100%', height:'100%'}}
                src={`http://localhost:5601/app/dashboards#/view/43a5d7c0-d9ba-11ed-91e8-9b55e1c42bbc?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d%2Fd,to:now))&_a=(description:'result%20test',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:ff41d030-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-29555afe-5516-4be8-8f17-6a968fca4fcf,type:index-pattern),(id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-ebadfd51-e4a7-4d44-86cd-1a77ad040662,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('29555afe-5516-4be8-8f17-6a968fca4fcf':(columnOrder:!(a19007bc-ff28-4267-b3fc-a15af05eb563,'43796387-c532-4a6e-86d4-cabb8b5adac9'),columns:('43796387-c532-4a6e-86d4-cabb8b5adac9':(customLabel:!t,dataType:number,isBucketed:!f,label:'%EB%8B%B5%EB%B3%80%20%EC%88%98',operationType:count,params:(format:(id:number,params:(decimals:0))),scale:ratio,sourceField:Records),a19007bc-ff28-4267-b3fc-a15af05eb563:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20answer_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'43796387-c532-4a6e-86d4-cabb8b5adac9',type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:answer_body.keyword)),incompleteColumns:()),ebadfd51-e4a7-4d44-86cd-1a77ad040662:(columnOrder:!('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815',fb967f99-fbbd-4753-8d84-395ca8f7dc94),columns:('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20choice_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:fb967f99-fbbd-4753-8d84-395ca8f7dc94,type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:choice_body.keyword),fb967f99-fbbd-4753-8d84-395ca8f7dc94:(dataType:number,isBucketed:!f,label:'Median%20of%20choice_count',operationType:median,scale:ratio,sourceField:choice_count)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:'survey_code%20:%201%20'),visualization:(axisTitlesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),fittingFunction:None,gridlinesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),labelsOrientation:(x:0,yLeft:0,yRight:0),layers:!((accessors:!('43796387-c532-4a6e-86d4-cabb8b5adac9'),layerId:'29555afe-5516-4be8-8f17-6a968fca4fcf',layerType:data,seriesType:bar,xAccessor:a19007bc-ff28-4267-b3fc-a15af05eb563,yConfig:!((axisMode:auto,forAccessor:'43796387-c532-4a6e-86d4-cabb8b5adac9'))),(accessors:!(fb967f99-fbbd-4753-8d84-395ca8f7dc94),layerId:ebadfd51-e4a7-4d44-86cd-1a77ad040662,layerType:data,seriesType:bar,xAccessor:'4d72c06d-d6ee-4f73-bd4b-3ccbe600b815')),legend:(isVisible:!t,position:right,shouldTruncate:!f,showSingleSeries:!t),preferredSeriesType:bar,tickLabelsVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY),enhancements:()),gridData:(h:15,i:'500c9e6e-884e-4192-9fb2-3fd10b0239d5',w:13,x:0,y:0),id:'12eccf40-d9b9-11ed-91e8-9b55e1c42bbc',panelIndex:'500c9e6e-884e-4192-9fb2-3fd10b0239d5',type:lens,version:'7.17.5'),(embeddableConfig:(attributes:(references:!((id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:ff41d030-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-29555afe-5516-4be8-8f17-6a968fca4fcf,type:index-pattern),(id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-ebadfd51-e4a7-4d44-86cd-1a77ad040662,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('29555afe-5516-4be8-8f17-6a968fca4fcf':(columnOrder:!(a19007bc-ff28-4267-b3fc-a15af05eb563,'43796387-c532-4a6e-86d4-cabb8b5adac9'),columns:('43796387-c532-4a6e-86d4-cabb8b5adac9':(customLabel:!t,dataType:number,isBucketed:!f,label:'%EB%8B%B5%EB%B3%80%20%EC%88%98',operationType:count,params:(format:(id:number,params:(decimals:0))),scale:ratio,sourceField:Records),a19007bc-ff28-4267-b3fc-a15af05eb563:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20answer_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'43796387-c532-4a6e-86d4-cabb8b5adac9',type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:answer_body.keyword)),incompleteColumns:()),ebadfd51-e4a7-4d44-86cd-1a77ad040662:(columnOrder:!('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815',fb967f99-fbbd-4753-8d84-395ca8f7dc94),columns:('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20choice_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:fb967f99-fbbd-4753-8d84-395ca8f7dc94,type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:choice_body.keyword),fb967f99-fbbd-4753-8d84-395ca8f7dc94:(dataType:number,isBucketed:!f,label:'Median%20of%20choice_count',operationType:median,scale:ratio,sourceField:choice_count)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:'survey_code%20:%201%20'),visualization:(axisTitlesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),fittingFunction:None,gridlinesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),labelsOrientation:(x:0,yLeft:0,yRight:0),layers:!((accessors:!('43796387-c532-4a6e-86d4-cabb8b5adac9'),layerId:'29555afe-5516-4be8-8f17-6a968fca4fcf',layerType:data,seriesType:bar,xAccessor:a19007bc-ff28-4267-b3fc-a15af05eb563,yConfig:!((axisMode:auto,forAccessor:'43796387-c532-4a6e-86d4-cabb8b5adac9'))),(accessors:!(fb967f99-fbbd-4753-8d84-395ca8f7dc94),layerId:ebadfd51-e4a7-4d44-86cd-1a77ad040662,layerType:data,seriesType:bar,xAccessor:'4d72c06d-d6ee-4f73-bd4b-3ccbe600b815')),legend:(isVisible:!t,position:right,shouldTruncate:!f,showSingleSeries:!t),preferredSeriesType:bar,tickLabelsVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY),enhancements:()),gridData:(h:19,i:'71d08e87-b68b-400f-bfe0-81001d217f3a',w:18,x:13,y:0),id:'64ddfb80-d9b9-11ed-91e8-9b55e1c42bbc',panelIndex:'71d08e87-b68b-400f-bfe0-81001d217f3a',type:lens,version:'7.17.5'),(embeddableConfig:(attributes:(references:!((id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:ff41d030-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-29555afe-5516-4be8-8f17-6a968fca4fcf,type:index-pattern),(id:f7683b10-d9b3-11ed-91e8-9b55e1c42bbc,name:indexpattern-datasource-layer-ebadfd51-e4a7-4d44-86cd-1a77ad040662,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('29555afe-5516-4be8-8f17-6a968fca4fcf':(columnOrder:!(a19007bc-ff28-4267-b3fc-a15af05eb563,'43796387-c532-4a6e-86d4-cabb8b5adac9'),columns:('43796387-c532-4a6e-86d4-cabb8b5adac9':(customLabel:!t,dataType:number,isBucketed:!f,label:'%EB%8B%B5%EB%B3%80%20%EC%88%98',operationType:count,params:(format:(id:number,params:(decimals:0))),scale:ratio,sourceField:Records),a19007bc-ff28-4267-b3fc-a15af05eb563:(dataType:string,isBucketed:!t,label:'Top%20values%20of%20answer_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:'43796387-c532-4a6e-86d4-cabb8b5adac9',type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:answer_body.keyword)),incompleteColumns:()),ebadfd51-e4a7-4d44-86cd-1a77ad040662:(columnOrder:!('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815',fb967f99-fbbd-4753-8d84-395ca8f7dc94),columns:('4d72c06d-d6ee-4f73-bd4b-3ccbe600b815':(dataType:string,isBucketed:!t,label:'Top%20values%20of%20choice_body.keyword',operationType:terms,params:(missingBucket:!f,orderBy:(columnId:fb967f99-fbbd-4753-8d84-395ca8f7dc94,type:column),orderDirection:desc,otherBucket:!t,size:5),scale:ordinal,sourceField:choice_body.keyword),fb967f99-fbbd-4753-8d84-395ca8f7dc94:(dataType:number,isBucketed:!f,label:'Median%20of%20choice_count',operationType:median,scale:ratio,sourceField:choice_count)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:'survey_code%20:%201%20'),visualization:(axisTitlesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),fittingFunction:None,gridlinesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),labelsOrientation:(x:0,yLeft:0,yRight:0),layers:!((accessors:!('43796387-c532-4a6e-86d4-cabb8b5adac9'),layerId:'29555afe-5516-4be8-8f17-6a968fca4fcf',layerType:data,seriesType:bar,xAccessor:a19007bc-ff28-4267-b3fc-a15af05eb563,yConfig:!((axisMode:auto,forAccessor:'43796387-c532-4a6e-86d4-cabb8b5adac9'))),(accessors:!(fb967f99-fbbd-4753-8d84-395ca8f7dc94),layerId:ebadfd51-e4a7-4d44-86cd-1a77ad040662,layerType:data,seriesType:bar,xAccessor:'4d72c06d-d6ee-4f73-bd4b-3ccbe600b815')),legend:(isVisible:!t,position:right,shouldTruncate:!f,showSingleSeries:!t),preferredSeriesType:bar,tickLabelsVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY),enhancements:()),gridData:(h:19,i:e4f115f8-ffed-4232-9c02-57ba4c69232b,w:17,x:31,y:0),id:'1fe54650-d9b9-11ed-91e8-9b55e1c42bbc',panelIndex:e4f115f8-ffed-4232-9c02-57ba4c69232b,type:lens,version:'7.17.5')),query:(language:kuery,query:'survey_code%20:%20${surveyCode}'),tags:!('4c8fd610-d8f7-11ed-9720-fd4523f2c15f'),timeRestore:!f,title:result,viewMode:edit)&hide-filter-bar=true`} height="600" width="800"/>
        </>
    );
}

export default SurveyDetail;