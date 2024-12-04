# EntregaFinal
En nuestro proyecto, utilizamos varias ramas para organizar el código y mantener todo funcionando sin problemas. Básicamente, tenemos una rama principal llamada main, que es donde siempre tenemos el código listo para producción. Esta es la rama que utilizamos cuando queremos hacer un despliegue a producción, y solo se hace merge a main cuando sabemos que todo está probado y listo para salir.

Después tenemos la rama develop, que es la que usamos para todo el trabajo de desarrollo. Los desarrolladores crean ramas nuevas desde develop para trabajar en nuevas funcionalidades o en correcciones de errores. Por ejemplo, si estamos trabajando en una nueva característica, creamos una rama con un nombre como feature/nueva-funcionalidad. Esto nos permite trabajar de manera independiente sin interferir con el código que está en desarrollo en otras partes del proyecto.

Cuando ya terminamos de trabajar en una funcionalidad y todo está listo, hacemos un pull request desde nuestra rama de característica hacia develop, donde otros pueden revisarlo y probarlo. La idea es que en develop tengamos el código más reciente y con las nuevas características, pero sin que afecte a la versión de producción.

Si todo en develop está listo para ser lanzado, creamos una rama release, que es como un último paso para hacer ajustes finales antes de fusionarlo a main. Esto nos da un espacio para realizar pequeñas correcciones, actualizar la documentación o cambiar algunas configuraciones sin interferir con el código en desarrollo. Y cuando todo está perfecto en la rama release, hacemos el merge a main y ya tenemos nuestra versión lista para producción.

Y a veces, cuando aparece un error urgente en producción, usamos una rama hotfix para corregir el problema lo más rápido posible. Estas ramas se crean directamente desde main y se fusionan de nuevo ahí una vez que solucionamos el problema, para asegurarnos de que todo quede bien.

Este flujo de trabajo con ramas nos ayuda a mantener las cosas organizadas y separadas. Así, nadie trabaja sobre el código que está listo para producción y las nuevas funcionalidades pueden ser integradas de manera segura.

# Participacion
Carlos Jose Romero

# Conclusiones
El uso de ramas en GitHub es clave para mantener un flujo de trabajo organizado y evitar que los errores afecten a la versión de producción. Con este enfoque de ramas, aseguramos que las nuevas funcionalidades se desarrollen de manera aislada y que se puedan integrar y probar sin comprometer el código de producción.