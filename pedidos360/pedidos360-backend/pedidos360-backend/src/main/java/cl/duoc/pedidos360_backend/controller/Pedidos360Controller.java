package cl.duoc.pedidos360_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.duoc.pedidos360_backend.model.Pedido;
import cl.duoc.pedidos360_backend.service.PedidoService;

// Ahora delega a PedidoService -> PedidoRepository -> base de datos cloud,
// en vez de devolver datos fijos en memoria.
@RestController
@RequestMapping("/api/pedidos")
public class Pedidos360Controller {

    private final PedidoService pedidoService;

    public Pedidos360Controller(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping
    public List<Pedido> obtenerPedidos() {
        return pedidoService.obtenerTodos();
    }
}
