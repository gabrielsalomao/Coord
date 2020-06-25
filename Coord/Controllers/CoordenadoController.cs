using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Coord.Models;

namespace Coord.Controllers
{
    public class CoordenadoController : Controller
    {
        private readonly CoordContext _context;

        public CoordenadoController(CoordContext context)
        {
            _context = context;
        }

        // GET: Coordenado
        public async Task<IActionResult> Index()
        {
            var coordContext = _context.Coordenado.Include(c => c.Coordenador);
            return View(await coordContext.ToListAsync());
        }

        // GET: Coordenado/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coordenado = await _context.Coordenado
                .Include(c => c.Coordenador)
                .FirstOrDefaultAsync(m => m.CoordenadoId == id);
            if (coordenado == null)
            {
                return NotFound();
            }

            return View(coordenado);
        }

        // GET: Coordenado/Create
        public IActionResult Create()
        {
            ViewData["CoordenadorId"] = new SelectList(_context.Coordenador, "CoordenadorId", "Nome");
            return View();
        }

        // POST: Coordenado/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CoordenadoId,Nome,Veiculo,RedeSocial,Placa,Celular,Telefone,Logradouro,Bairro,Cep,Numero,CoordenadorId,CreatedDate,UpdatedDate")] Coordenado coordenado)
        {
            if (ModelState.IsValid)
            {
                _context.Add(coordenado);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CoordenadorId"] = new SelectList(_context.Coordenador, "CoordenadorId", "Nome", coordenado.CoordenadorId);
            return View(coordenado);
        }

        // GET: Coordenado/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coordenado = await _context.Coordenado.FindAsync(id);
            if (coordenado == null)
            {
                return NotFound();
            }
            ViewData["CoordenadorId"] = new SelectList(_context.Coordenador, "CoordenadorId", "Nome", coordenado.CoordenadorId);
            return View(coordenado);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CoordenadoId,Nome,Veiculo,RedeSocial,Placa,Celular,Telefone,Logradouro,Bairro,Cep,Numero,CoordenadorId,CreatedDate,UpdatedDate")] Coordenado coordenado)
        {
            if (id != coordenado.CoordenadoId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(coordenado);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CoordenadoExists(coordenado.CoordenadoId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CoordenadorId"] = new SelectList(_context.Coordenador, "CoordenadorId", "Nome", coordenado.CoordenadorId);
            return View(coordenado);
        }

        // GET: Coordenado/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coordenado = await _context.Coordenado
                .Include(c => c.Coordenador)
                .FirstOrDefaultAsync(m => m.CoordenadoId == id);
            if (coordenado == null)
            {
                return NotFound();
            }

            return View(coordenado);
        }

        // POST: Coordenado/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var coordenado = await _context.Coordenado.FindAsync(id);
            _context.Coordenado.Remove(coordenado);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public JsonResult ObterEnderecosDosCoordenados()
        {
            object data;

            data = from x in _context.Coordenado.ToList()
                   select new
                   {
                       codigo = x.CoordenadoId,
                       endereco = x.ConstruirEndereco(x)
                   };

            return Json(data);
        }

        [HttpPost]
        public async Task<JsonResult> ObterCoordenadosPorCodigo(string codigos)
        {
            object response = new object();

            if (string.IsNullOrEmpty(codigos))
            {


                return Json(response = new
                {
                    success = false
                });
            }

            int[] arrayCodigos = codigos.Split(',').Select(x => int.Parse(x)).ToArray();

            var data = await (from x in _context.Coordenado.Where(x => arrayCodigos.Contains(x.CoordenadoId))
                              select new
                              {
                                  Codigo = x.CoordenadoId,
                                  x.Nome,
                                  x.Telefone,
                              }).ToListAsync();

            response = new
            {
                success = true,
                data
            };

            return Json(response);
        }

        private bool CoordenadoExists(int id)
        {
            return _context.Coordenado.Any(e => e.CoordenadoId == id);
        }
    }
}
