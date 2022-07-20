-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT CONCAT(employ.first_name, " ", employ.last_name) AS "Employee Name",
CONCAT(manager.first_name, " ", manager.last_name) AS "Manager Name"
FROM hr.employees AS employ
INNER JOIN hr.employees AS manager 
ON employ.manager_id = manager.employee_id
WHERE employ.department_id != manager.department_id;
-- Ou WHERE employ.department_id <> manager.department_id

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
COUNT(*)
FROM hr.employees AS manager
INNER JOIN hr.employees AS employ 
ON employ.manager_id = manager.employee_id
GROUP BY manager.employee_id;