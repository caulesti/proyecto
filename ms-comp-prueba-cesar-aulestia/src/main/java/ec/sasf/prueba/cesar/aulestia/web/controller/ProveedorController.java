package ec.sasf.prueba.cesar.aulestia.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ProveedorEntity;
import ec.sasf.prueba.cesar.aulestia.service.ProveedorService;
import ec.sasf.prueba.cesar.aulestia.service.dto.ProveedorDto;

@RestController
@RequestMapping("/api/proveedores")
@CrossOrigin("*")
public class ProveedorController {
    private final ProveedorService proveedorService;

    @Autowired
    public ProveedorController(ProveedorService proveedorService) {
        this.proveedorService = proveedorService;
    }

    @PostMapping
    public ResponseEntity<ProveedorEntity> add(@RequestBody ProveedorDto dto) {
        return ResponseEntity.ok(proveedorService.add(dto.getNombre(), dto.getCorreo(), dto.getTelefono()));
    } 

}
