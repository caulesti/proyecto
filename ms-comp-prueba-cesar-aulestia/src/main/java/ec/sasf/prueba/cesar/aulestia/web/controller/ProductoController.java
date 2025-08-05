package ec.sasf.prueba.cesar.aulestia.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProductoEntity;
import ec.sasf.prueba.cesar.aulestia.service.ProductoService;
import ec.sasf.prueba.cesar.aulestia.service.dto.ProductoDto;

@RestController
@RequestMapping("/productos")
@CrossOrigin("*")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<ProductoEntity> add(@RequestBody ProductoDto dto) {
        return ResponseEntity.ok(productoService.add(dto));
    }

    @GetMapping
    public ResponseEntity<List<ProductoEntity>> getProductos() {
        return ResponseEntity.ok(productoService.getProductos());
    }

    @PutMapping("/{id}/{precio}")
    public ResponseEntity<ProductoEntity> actualizarPrecio(@PathVariable Long id, @PathVariable Double precio) {
        return ResponseEntity.ok(productoService.actualizarPrecio(id, precio)); 
    }
    
}
