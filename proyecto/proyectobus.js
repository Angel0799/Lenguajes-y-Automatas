
var exp = '\ package hilo2; \
/* \
este es un comentario \
*/ \
\
import java.util.Random; \
\
/* \
este es otro comentario \
*/ \
//comentario \
public class Hilo2 implements Runnable{ \
 int suma = 4 + c; \
 int x >= 10;\
    private final int tiempo;//cuando se usa el final es una constante \
    private String nombreProceso; \
    private final static Random generador = new Random(); \
    public Hilo2(String nombre){ \
        nombreProceso = nombre; \
        tiempo = generador.nextInt(5000); \
    } \
    public void run(){ \
        try{ \
            System.out.println(nombreProceso + " inactivado por " + tiempo + " milisegundos"); \
            Thread.sleep(tiempo); \
            System.out.println(nombreProceso + " despertando y finalizando"); \
        }catch(InterruptedException ex){ \
            ex.printStackTrace();//imprime el rastreo del proceso ue genero el error \
            System.out.println(nombreProceso + " tuvo un error."); } \
    } ';

//var expresion = /([\w]+\s.\s[\w]\s.\s[\w](;)|[a-z]\s..\s[0-9][0-9](;)|\s+[0-9][0-9]\s+.\s+[0-9][0-9]\s+|[\w]+\s+.\s+[\w][´][\w](;)|[\w].[\w][´].[\w].(;))/g
//var expresion = /([\w]+\s+.\s+[\w].[\w]\s+)/g
//var expresion = /([\w]\s+.[\w][´]\s+.\s+[\w].\s+)/g
var expresion = /([\w]\s+.[<|>|=|>=|<=]\s+[0-9]+|[\w]+\s.\s[\w]\s.\s[\w](;))/g;
result = exp.match(expresion);
console.log(result);

