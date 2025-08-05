package ec.sasf.prueba.cesar.aulestia.service.dto;

import lombok.Data;

@Data
public class ProductoDto {
    private String nombre;
    private String descripcion; 
    private Double precio;
    private Integer stockInicial; 
    private Long idProveedor;
}
