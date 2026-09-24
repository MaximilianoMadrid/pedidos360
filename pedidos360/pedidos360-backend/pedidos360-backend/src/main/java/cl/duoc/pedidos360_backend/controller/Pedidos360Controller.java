package cl.duoc.pedidos360_backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Version inicial en memoria: mismos campos (id, producto, estado) que ya
// consume pedidos.service.ts en el frontend. Cuando integre la base de datos
// cloud, esta clase debe delegar a un Service que use un Repository JPA
// en vez de devolver datos fijos.
@RestController
@RequestMapping("/api/pedidos")
public class Pedidos360Controller {

    @GetMapping
    public List<Map<String, Object>> obtenerPedidos() {
        return List.of(
                Map.of("id", 1, "producto", "Notebook", "estado", "EN_PREPARACION"),
                Map.of("id", 2, "producto", "Telefono", "estado", "DISPONIBLE")
        );
    }
}
