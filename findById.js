var dd = [
    {
      id: 'RAKUFNUBNY00UBZ40950',
      name: 'Grade 1 Cover',
      activityId: 'RAKUFNUBNY00UBZ40950',
      nodeType: 'activity',
      suppressed: false,
      hidden: false
    },
    {
      children: [
        {
          id: 'SLWDYEQHTZAFA3ALH195',
          name: 'Build Background Video',
          activityId: 'SLWDYEQHTZAFA3ALH195',
          nodeType: 'activity',
          suppressed: false,
          hidden: false,
          assetReference: {
            referenceId: 'UWFHA5A1E0EGKCM0W899',
            assetType: 'image'
          }
        },
        {
          children: [
            {
              id: 'HQUCD2SSRKMYC2PJM636',
              name: 'Eat or Be Eaten Splash Card',
              activityId: 'HQUCD2SSRKMYC2PJM636',
              nodeType: 'activity',
              suppressed: false,
              hidden: true
            },
            {
              children: [
                {
                  id: 'ZDTWEZFL13L8516VY480',
                  name: 'Interactive Work Text: Eat or Be Eaten',
                  activityId: 'ZDTWEZFL13L8516VY480',
                  nodeType: 'activity',
                  suppressed: false,
                  hidden: true,
                  defaultLaunchMode: 'modal'
                }
     
     ]}]}]}]


function findById(o, id) {
    //Early return
    if( o.id === id ){
      return o;
    }
    var result, p; 
    for (p in o) {
        if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
            result = findById(o[p], id);
            if(result){
                return result;
            }
        }
    }
    return result;
}


console.log(findById(dd, "ZDTWEZFL13L8516VY480"))

