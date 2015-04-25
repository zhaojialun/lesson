var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    	    if(a<=0) return false;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
    	   if(a<=0) return false;
    	   if(b<=0) return false;
    	   if(c<=0) return false;
    	   if(a=b)  return true;
    	   if(b=c)	return true;
    	   if(a=c)  return true;
    	
    	   return false;},
    isScalene : function(a,b,c) {
    	   if(a+b>c&&b+c>a&&a+c>b) return true;
    	 
    	   //if(b+c>a) return true;
    	  
    	   //if(a+c>b) return true;
    	   
    	   return false;
    
    },
};