import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MapComponent from "./MapComponent.tsx";
import {Field} from "../../models/Field.ts";
import {addField, updateField} from "../../store/slices/FieldSlice.ts";