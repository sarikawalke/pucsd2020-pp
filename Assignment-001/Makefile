all: main1

main1: main.o libmylib.a lib.so
	gcc -lm -o main1 main.o -L. -lmylib

main.o: main.c
	gcc -O -c main.c

add.o: add.c add.h
	gcc -O -c add.c
sub.o: sub.c sub.h
	gcc -O -c sub.c
mul.o: mul.c mul.h
	gcc -O -c mul.c
div.o: div.c div.h
	gcc -O -c div.c


libmylib.a: add.o sub.o mul.o div.o
	ar rcs libmylib.a add.o sub.o mul.o div.o

libs: libmylib.a
lib.so: *.c
	gcc *.c -o lib.so -fPIC -shared

clean:
	rm -f main1 *.o *.a *.so
