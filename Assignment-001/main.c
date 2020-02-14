#include <stdio.h>
#include "add.h"
#include "sub.h"
#include "mul.h"
#include "div.h"
int main()
{
	
	int first_no,second_no;
	printf("enter no\n");
	scanf("%d%d",&first_no,&second_no);
	int choice;
	printf("enter choice\n");
	scanf("%d",&choice);
	switch(choice)
	{
		case 1: printf("%d",add(first_no,second_no));
			break;
		case 2: printf("%d",sub(first_no,second_no));
                        break;
		case 3: printf("%d",mul(first_no,second_no));
                        break;
		case 4: printf("%d",div(first_no,second_no));
                        break;
	}
return 0;
}
