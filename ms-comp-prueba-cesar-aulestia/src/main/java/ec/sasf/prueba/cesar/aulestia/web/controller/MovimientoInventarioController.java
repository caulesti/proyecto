package ec.sasf.prueba.cesar.aulestia.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.MovimientoInventarioEntity;
import ec.sasf.prueba.cesar.aulestia.service.MovimientoInventarioService;
import ec.sasf.prueba.cesar.aulestia.service.dto.MovimientoInventarioDto;

@RestController
@RequestMapping("/movimientos")
@CrossOrigin("*")
public class MovimientoInventarioController {
    private final MovimientoInventarioService movimientoInventarioService;

    public MovimientoInventarioController(MovimientoInventarioService movimientoInventarioService) {
        this.movimientoInventarioService = movimientoInventarioService;
    }

    @PostMapping
    public ResponseEntity<MovimientoInventarioEntity> add(@RequestBody MovimientoInventarioDto dto) {
        return ResponseEntity.ok(movimientoInventarioService.add(dto));
    }

    @GetMapping("/{idProducto}")
    public ResponseEntity<List<MovimientoInventarioEntity>> obtenerPorProducto(@PathVariable Long idProducto) {
        return ResponseEntity.ok(movimientoInventarioService.obtenerPorProducto(idProducto));
    }
}
