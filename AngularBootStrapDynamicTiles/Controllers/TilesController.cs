﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularBootStrapDynamicTiles.Controllers
{
    [Authorize]
    public class TilesController : Controller
    {
        // GET: Tiles
        public ActionResult Index()
        {
            return View();
        }
    }
}