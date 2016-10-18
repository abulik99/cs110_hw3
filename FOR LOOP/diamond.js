const diamond= function(n)
{
    if(n%2 === 0)
    {  
        n = n + 1;
    }
    let spc=(n-1)/2,astx= 1, i, j,k;
    for( i=n;i>0;i--) 
    {
        k='';
        for (j= spc; j > 0; j--) 
        {
            k += ' ';
        }
        for (j = astx; j > 0; j--) 
        {
            k += '*';
        }
          if(i>(n+1)/2) 
        {
            spc--;
            astx += 2;
        }
        else
        {
            spc++;
            astx-=2;
        }
        console.log(k);
    }
}
diamond(6);