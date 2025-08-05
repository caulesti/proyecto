package ec.sasf.prueba.cesar.aulestia.service.dto;

import lombok.Data;

@Data
public class MovimientoInventarioDto {
    private Long idProducto; 
    private Integer cantidad;
    private String tipoMovimiento;
}
